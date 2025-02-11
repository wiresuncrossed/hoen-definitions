# Contributions Guidelines
Thank you for considering contributing to the **Hierarchy of Engineering Needs** project! The Hierarchy of Needs project is supported and maintained by [Wires Uncrossed Engineering](https://www.wiresuncrossed.co.nz/about). Your involvement is highly valued. To ensure a smooth collaboration, please adhere to the following guidelines:
## Getting Started

### Fork and Clone
1. **Fork the Repository**: Create a copy of the repository under your GitHub account.
2. **Clone the Fork**: Clone your fork locally to begin making changes.

### Create a New Branch
- Use a descriptive name for your branch, such as:
  ```bash
  git checkout -b definitions.yaml-<your-change>
  ```

## Making Changes

### File Scope
- **Edit only** `path/to/definitions.yaml`.

### Allowed Changes
- Add new definitions.
- Update existing definitions to improve spelling, grammar, or clarity.
- Fix YAML syntax or formatting issues.

### Prohibited Changes
- Edits to any files outside of `definitions.yaml`.
- Restructuring the YAML schema or introducing new formats.
- Duplicating existing definitions.

### Content Guidelines
#### Clarity and Consistency
- **Name**: Use Title Case (e.g., "Code Review Process").
- **Description**: Write clearly and concisely in 2–3 sentences, adhering to proper grammar, spelling, and punctuation.

#### Vendor/Technology-Agnostic
- Contributions must remain agnostic to specific vendors or technologies.

### Format and Validity
- Validate the YAML file using tools like `yamllint` or `prettier`.
- Indent with **2 spaces** (or adjust per preference).
- Ensure valid syntax and consistent key-value naming.

### Specificity of Changes
- Clearly describe what was changed and why.
- Avoid unrelated edits; focus only on the specific issue.

## Submitting a Pull Request (PR)

### PR Requirements
1. **Title**: Provide a short, descriptive title.
2. **Description**: Include a detailed explanation of the change.
3. **Link Related Issues**: Reference any relevant issues, if applicable.

### Testing
- Test and validate your changes locally to ensure correctness.

### Versioning
- Use the `MAJOR.MINOR.PATCH` format for releases:
    - **MAJOR**: Structural changes, reorganisations, or significant updates.
    - **MINOR**: Substantial content updates, such as adding or rewording needs.
    - **PATCH**: Typos, grammar, or formatting fixes.
- Releases occur upon PR acceptance and merge.

## Review Process

### Maintainer Review
A maintainer will review your PR for:
- Valid syntax and structure.
- Adherence to guidelines.
- Clarity and relevance of content.

#### Feedback
- Feedback may be provided for minor improvements.
- PRs failing to meet criteria will be closed with feedback for revision within **14 days**.

### Reasons for Rejection
- **Scope Violations**: Changes outside the allowed scope, such as editing files other than `definitions.yaml`.
- **YAML Syntax or Formatting Errors**: Issues with file structure, indentation, or invalid YAML syntax.
- **Missing Fields/Duplicates**: Omission of required fields or duplication of existing definitions.
- **File Integrity Issues**: Corruption or inconsistencies in the file caused by edits.
- **Non-Unique Identifiers**: Duplicate or conflicting identifiers for definitions.
- **Lack of Explanation**: Insufficient details about the changes made and their purpose.
- **No Tests**: Failure to validate or test changes before submission.

## Language Tone and Style

### General Tone
- **Clear and Concise**: Use straightforward, precise language.
- **Professional Yet Approachable**: Maintain a formal tone while being friendly and relatable.
- **Empowering**: Use language that instills confidence.
- **Inclusive**: Ensure language is welcoming and respectful.

### Style Principles
- **Focus on the Reader**: Write with the target audience in mind, prioritising actionable insights.
- **Active Voice**: Use active phrasing for clarity and engagement.
    - Example: “Team members complete tasks” instead of “Tasks are completed by team members.”
- **Action-Oriented**: Encourage responsibility with active verbs.
    - Example: “You can” instead of “It is possible to.”
- **Positive Framing**: Highlight opportunities over challenges.
    - Example: “Environments can be set up efficiently” instead of “Environments are hard to set up.”
- **Consistency**: Maintain uniform terminology and formatting across all documentation.
- **Agnostic**: Avoid references to specific tools, vendors, or technologies.

