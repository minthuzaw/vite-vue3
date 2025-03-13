import fs from 'fs/promises'
import path from 'path'
import process from 'process'
import { fileURLToPath } from 'url'
import { getFileContents } from './fileContents.js'

const folderName = process.argv[2]

const __dirname = fileURLToPath(import.meta.url)
const srcPath = path.join(__dirname, '../../src')
const modulesPath = path.join(srcPath, 'modules')
const folderPath = path.join(modulesPath, folderName)

// Check if modules folder exists
try {
  await fs.stat(modulesPath)
} catch (error) {
  if (error.code === 'ENOENT') {
    await fs.mkdir(modulesPath)
    console.log('No modules folder found. Created at', modulesPath)
  } else {
    console.error(error)
    process.exit(1)
  }
}

// Check if folder name is provided
if (!folderName) {
  console.error('Please provide a folder name.')
  process.exit(1)
}

// Create folder
async function createFolder() {
  try {
    await fs.stat(folderPath)
    console.error(`"${folderName}" already exists.`)
    process.exit(0)
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(folderPath, { recursive: true })
      console.log('\x1b[32m%s\x1b[0m', `"${folderName}" folder created at ${folderPath}`)
    } else {
      console.error(error)
      process.exit(1)
    }
  }
}

// Create Files
async function createFiles() {
  const moduleFolder = await fs.mkdir(path.join(folderPath, 'list'), { recursive: true })
  const fileName = folderName.charAt(0).toUpperCase() + folderName.slice(1)

  const files = getFileContents(folderName, fileName, moduleFolder, folderPath)

  for (const { path: filePath, content, message } of files) {
    await fs.writeFile(filePath, content)
    console.log('\x1b[32m%s\x1b[0m', message)
  }

  console.log('\x1b[38;5;226m%s\x1b[0m', `Note: You must import "${folderName}Routes" into routers/index.js`)
  console.log('\x1b[38;5;226m%s\x1b[0m', "Note: You can remove that file if you don't need it.")
}

createFolder().then(createFiles)
