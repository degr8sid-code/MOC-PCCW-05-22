# Set up SSH Keygen on your Computer

## Generate the SSH key

`ssh-keygen -t rsa -b 4096 -C` "email-address"`

## Add the SSH key to your agent

`ssh-add -K <path to your SSH private key file>`

After that, go to GitHub and add new SSH public key under SSH and GPG Keys section.

# Install Nodejs

Use the NPM package manager to install nodejs

`npm install nodejs`

# Set Up Jest 

## Install Jest

Use the NPM package manager to install Jest

`npm install --save-dev jest`

## Run Jest

`npm test`

If you get the missing modules error, add the following files in `.babelrc` file:

`{
    "presets": ["@babel/preset-env"]
}`

And install babel using the following command:

`npm install @babel/preset-env`

Now run the `npm test` command. It will work!!
