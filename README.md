# Hierarchy of Engineering Needs - Definitions
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]
![Validate definition](https://github.com/wiresuncrossed/hoen-definitions/actions/workflows/validate.yaml/badge.svg)

## Purpose
This repository is the main store of definitions and relationships
for Hierarchy of Engineering Needs framework published at
[engineeringneeds.io](https://engineeringneeds.io)

The project serves as a guideline for teams to identify and fulfill their basic needs, manage work effectively, and ensure ownership of services in production. The definitions outlined in `definitions.yaml` are crucial for maintaining clarity and consistency across projects.

Site and visualization repo:
- https://github.com/wiresuncrossed/hierachy-of-engineering-needs.github.io

## Contributing
If you wish to contribute, please follow our [contribution guide](./docs/CONTRIBUTING.md)

### YAML Formatting Guidelines
This project uses specific YAML formatting conventions to maintain readability:

- **Line Length**: Maximum 120 characters (configured in `.yamllint`)
- **Long Text**: Use block scalar format (`>-`) for wrapping long sentences
- **Example**:
  ```yaml
  description: >-
    This is a long description that wraps to multiple lines
    but produces a single line value when parsed.
  ```

The formatting rules are enforced by yamllint and VS Code settings.

## License
This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg