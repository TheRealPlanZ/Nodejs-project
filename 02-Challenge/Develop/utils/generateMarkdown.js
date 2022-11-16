// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  } else if (license === 'GPL') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    return 'Licensed under the MIT License; you may not use this file except in compliance with the License. You may obtain a copy of the License at https://opensource.org/licenses/MIT'
  } else if (license === 'BSD') {
    return 'Licensed under the BSD 3-Clause License; you may not use this file except in compliance with the License. You may obtain a copy of the License at https://opensource.org/licenses/BSD-3-Clause'
  } else if (license === 'GPL') {
    return 'Licensed under the GNU General Public License v3.0; you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributors}

## Tests

${data.tests}

## Questions

${data.issues}

* GitHub: [${data.githubUsername}](

* Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
