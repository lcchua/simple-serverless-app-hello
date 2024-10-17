module.exports.handler = async (event) => {
    // write hello world to the logs
    console.log("Hello World");
    // assign a value to a variable
    let message = "Go Serverless v3.0! Your function executed successfully!";

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: message,
                input: event,
            },
            null,
            2
        ),
    };
};
