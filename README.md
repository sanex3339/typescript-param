## Typescript `__param` helper exported as node module

In cases, when you want to disable typescript helpers generation with `--noEmitHelpers` flag, you need to include that helpers manually.
Now, you can do that easily!

### Example with Webpack

	// webpack configuration object
	
	plugins: [
		new webpack.ProvidePlugin({
			__param: 'typescript-param'
		})
	],