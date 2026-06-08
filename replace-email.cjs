const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.json'));

let replacements = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.replace(/support@kiayataxi\.com/g, 'c.contact@gmail.com');
  content = content.replace(/contact@kaiya\.taxi/g, 'c.contact@gmail.com');
  content = content.replace(/info@hokkaidotaxi\.com/g, 'c.contact@gmail.com');
  content = content.replace(/c\.contact@kaiya\.taxi/g, 'c.contact@gmail.com');
  
  if (original !== content) {
    fs.writeFileSync(file, content, 'utf8');
    replacements++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Total files updated: ${replacements}`);
