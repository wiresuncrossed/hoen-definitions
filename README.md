# Hierarchy of Engineering Needs - Definitions
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

Main repository to store the definitions and relationships
for Hierarchy of Engineering Needs framework published at
[engineeringneeds.io](https://engineeringneeds.io)

Site and visualization repo:
- https://github.com/wiresuncrossed/hierachy-of-engineering-needs.github.io



This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Purpose

This project serves as a guideline for teams to identify and fulfill their basic needs, manage work effectively, and ensure ownership of services in production. The definitions outlined in `definitions.yaml` are crucial for maintaining clarity and consistency across projects.

### Setup Instructions

To get started with the Hoen Definitions project, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/hoen-definitions.git
   cd hoen-definitions
   ```

2. **Install Dependencies**
   Ensure you have the necessary tools installed for validating the `definitions.yaml` file. You may need a YAML linter. For example, you can use `yamllint`:
   ```bash
   pip install yamllint
   ```

3. **Validate Definitions**
   You can manually validate the `definitions.yaml` file using:
   ```bash
   yamllint -c .yamllint.yml definitions.yaml
   ```

### Contributing

Contributions are welcome! If you would like to contribute to the Hoen Definitions project, please follow these guidelines:

1. **Fork the Repository**
   Click the "Fork" button on the top right of the repository page.

2. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   Edit the files as needed.

4. **Commit Your Changes**
   ```bash
   git commit -m "Add your message here"
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   Go to the original repository and click on "New Pull Request".

