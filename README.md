# jaffe_microsite-internal 
 
 Make sure you have the node and npm installed with the following global dependencies: 
 
1. node version v6.11.0
2. npm version 3.10.10

Global dependencies: 
1. npm install -g bower
2. npm install -g grunt-cli
3. npm install -g yo
4. npm install -g generator-angm
5. npm install -g bower-installer
 
 
 ## Running project on development
 Open your Terminal/Shell and type:
 
 ```bash
 grunt dev
 ```
 
 After the command your application should start right in your default browser at `localhost:3000`.
 
 
 ## Building asset pipeline for production application
 Open your Terminal/Shell and type:
 
 ```bash
 grunt build
 ```
 
# Development

## CSS

Create a css folder within each module's directory and run the following script:

```
grunt build
```

- this will bundle all the custom application CSS and add it to the /app/assets/css/jaffe-microsite-appbundle.css file. This is read by the index.html. 

 
## Built with SubGenerators using generator-angm
Generator-angm have a subgenerator to create your application modules and directives.

1. Modules
2. Directives


## Modules
To create a module just type on your Terminal/Shell:

```
yo angm:angm-module
```

After that, you must entry the module name and choose what files you want to include.

The subgenerator will produce the following directory structure:

```
	moduleName/
		moduleName.html
		moduleNameModule.js
		moduleNameCtrl.js
		moduleNameRoute.js
		moduleNameService.js
		moduleName-test.js
```

**Note: Subgenerators are to be run from the root directory of your application.**

## Directives
To create a directive just type on your terminal window:

```
yo angm:angm-directive
```

After that you must entry the directive name and choose what dependencies you want, by default we using external templates and external controllers.

The subgenerator will produce the following directory structure:

```
shared/
		directives/
			directiveName/
				assets/ /* optional folder
				directiveName.html
				directiveNameCtrl.j
				directiveName-test.js
```

 
## Running Tests

The tests are written in **Jasmine**, which we run with the [Karma Test Runner][karma]. We provide a Karma configuration file pre-configured with some default options to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found on each module created named as `moduleName-test.js`.

The easiest way to run the unit tests is to use the supplied npm script on `package.json` file:

```
npm test
```

This script will start the Karma test runner to execute the unit tests.
