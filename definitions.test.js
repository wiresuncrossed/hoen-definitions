const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const Ajv = require('ajv');

const loadYamlFile = (filePath) => {
  const fullPath = path.join(__dirname, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return yaml.load(fileContents);
};

// Define the JSON schema for your YAML structure
const schema = {
  type: 'object',
  required: ['hierarchy'],
  properties: {
    hierarchy: {
      type: 'object',
      required: ['levels'],
      properties: {
        levels: {
          type: 'array',
          minItems: 5,
          maxItems: 5,
          items: {
            type: 'object',
            required: ['level', 'name', 'description', 'needs'],
            properties: {
              level: {
                type: 'integer',
                minimum: 1,
                maximum: 5
              },
              name: { type: 'string' },
              description: { type: 'string' },
              needs: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  required: ['ID', 'Name', 'Definition', 'Purpose', 'maturitySignals'],
                  properties: {
                    ID: {
                      type: 'string',
                      pattern: '^L[1-5]N\\d+$'
                    },
                    Name: { type: 'string' },
                    Definition: { type: 'string' },
                    Purpose: { type: 'string' },
                    maturitySignals: { type: 'string' }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

describe('Definitions YAML Structure', () => {
  let data;
  let ajv;

  beforeAll(() => {
    data = loadYamlFile('./definitions.yaml');
    ajv = new Ajv({ allErrors: true }); // Create validator instance
  });

  test.skip('debug test 👀: first need should match need schema', () => {
    const needSchema = schema.properties.hierarchy.properties.levels.items.properties.needs.items;
    const validate = ajv.compile(needSchema);
    const firstNeed = data.hierarchy.levels[0].needs[0];
    const valid = validate(firstNeed);
    
    if (!valid) {
      console.log('Validation errors:', JSON.stringify(validate.errors, null, 2));
      console.log('First need:', JSON.stringify(firstNeed, null, 2));
    }
    
    expect(valid).toBeTruthy();
  });

  test('should match schema definition', () => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    if (!valid) {
      console.log('Validation errors:', validate.errors);
      console.log('First need:', JSON.stringify(data.hierarchy.levels[0].needs[0], null, 2));
    }
    
    expect(valid).toBeTruthy();
  });
});

  