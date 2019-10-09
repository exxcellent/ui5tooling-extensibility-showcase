# ui5tooling-customtask
> [UI5 Tooling](https://github.com/SAP/ui5-tooling) sample app based on [OpenUI5](https://github.com/SAP/openui5) to show custom tasks.


## Getting started
1. Clone this repository and navigate into it
    ```sh
    git clone https://github.com/LisaLamp/ui5tooling-customtask.git
    cd ui5tooling-customtask
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

## Development

1. Start local server and run the application (http://localhost:5001/index.html)
    ```sh
    npm run start
    ```

## Building
1. Execute the build as self-contained build. 
    ```sh
    npm run build
    ```
1. Test the result locally
    1. Serve the newly created `/dist` directory by using UI5-Server
        ```sh
        npm serve-dist
        ```
    1. Open the app at http://localhost:5001/index.html
