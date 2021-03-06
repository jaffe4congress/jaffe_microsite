# jaffe_microsite-internal 
 
 Make sure you have the node and npm installed with the following global dependencies: 
 
1. node version v6.11.0
2. npm version 3.10.10

Global dependencies: 
1. npm install -g bower
2. npm install -g gulp
3. npm install -g yo
4. npm install -g generator-angm
5. npm install -g bower-installer
 

After dependencies are installed run:

 ```bash
 npm install 
 bower install
 ```
 
 
 ## Running project on development
 In root of directory folder run:
 
 ```bash
 gulp serve-dev
 ```
 
 After the command your application should start right in your default browser at `localhost:8080`.
 

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

**Note: Subgenerators are to be run from the root directory of your application.**

**After running subgenerator run the following gulp task to port file references to index.html**
```
gulp wiredep
```
