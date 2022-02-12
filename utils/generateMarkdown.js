//add fs to be able to write file
const fs = require('fs');

const year = new Date();
year.getYear();
const licenseArrs = {
  ccAttribution: ['cc-by.png', 'https://creativecommons.org/licenses/by/4.0/legalcode', `Creative Commons Attribution License, ${year}`],
  ccAttributionShareAlike: ['cc-by-sa.png', 'https://creativecommons.org/licenses/by-sa/4.0/legalcode', `Creative Commons Attribution Share-Alike License, ${year}`],
  ccAttributonNonCommercial: ['cc-by-nc.png', 'https://creativecommons.org/licenses/by-nc/4.0/legalcode', `Creative Commons Attribution Non-Commercial License, ${year}`],
  ccAttriubutionNonCommercialShareAlike: ['cc-by-nc-sa.png', 'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode', `Creative Commons Attribution Non-Commercial Share-Alike License, ${year}`], 
  mit: ['mit.svg.png', 'https://opensource.org/licenses/MIT', `MIT Open License, ${year}`],
  copyLeft: ['gnu-gpl-logo.png', 'https://www.gnu.org/licenses/gpl-3.0.html', `Gnu CopyLeft License, ${year}`],
  copyright: ['copyrightSymbol.png', 'https://en.wikipedia.org/wiki/Copyright',
  `Copyright (C) codeclast - All Rights Reserved. 
  Unauthorized copying of this file, via any medium is strictly prohibited. 
  Proprietary and confidential. 
  Written by codeclast, ${year}.`
  ],
};

//write the file to the base of the project folder
const writeFile = function (writeMe, projectFolder) {
  return new Promise((resolve, reject) => {
    const string = `../${projectFolder}/README.md`
      fs.writeFile(string, writeMe, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'Written!'
          });
      });
  });
};

//copy functioning images to project folder
const copyFile = function(projectFolder, file) {
  return new Promise((resolve, reject) => {
    const fromFile = `./assets/img/readme/${file}`;
    const toFile = `../${projectFolder}/assets/img/readme/${file}`;
    fs.copyFile(fromFile, toFile, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'image copied!'
          });
      });
  });
};

// TODO: Create a function to generate markdown for README
var generateMarkdown = function(data) {
  console.log('in generate Markdown function', data);
  renderLicense(data.license);
  const projectFolder = data.localprojectfolder
  let writeMe = 
  `# ${data.title + ' '  + data.version}
  ![${licenseType}](./assets/img/readme/${licenseBadge})

  ![${data.title} screenshot](./assets/img/readme/${data.image})

  ## OVERVIEW:
   ${data.description + '. ' + data.motivation + '. ' + data.function + '. ' + data.education + '.'}

  ## Table Of Contents:
  [Installation](README.md#installation)<br>
  [Usage](README.md#usage)<br>
  [Tests](README.md#tests)<br>
  [Credits](README.md#credits)<br>
  [Authors](README.md#authors)<br>
  [License](README.md#license)<br>

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Author(s)
  ${data.author}
  
  [Github Page](http://www.github.com/${data.github})

  ## License
  [${licenseType}](${licenseLink})
`;
  copyFile(projectFolder, data.image);
  copyFile(projectFolder, licenseBadge);
  writeFile(writeMe, projectFolder);
}

function renderToc(installation, usage, credits, tests, author) {
};

function renderLicense(license) {
  if (license) {
    licenseBadge = licenseArrs[license][0];
    licenseLink = licenseArrs[license][1];
    licenseType = licenseArrs[license][2];
  } else {
    licenseBadge = "";
    licenseLink = "";
    licenseType = "";
  };
};

module.exports = generateMarkdown;
