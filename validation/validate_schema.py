import yaml
import jsonschema
import json
import sys

def load_yaml(file_path):
    with open(file_path, 'r') as f:
        return yaml.safe_load(f)

def load_json(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)

def main():
    data = load_yaml('./definitions.yaml')
    schema = load_json('./validation/schema.json')
    try:
        jsonschema.validate(instance=data, schema=schema)
        print("Validation passed!")
    except jsonschema.ValidationError as e:
        print(f"Validation error: {e.message}")
        print(f"Error path: {' -> '.join(map(str, e.path))}")
        print(f"Schema path: {' -> '.join(map(str, e.schema_path))}")
        sys.exit(1)

if __name__ == "__main__":
    main()