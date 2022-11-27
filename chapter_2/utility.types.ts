type ServiceConfigParams = "port" | "basePath" | "enableStripePayments";
const serviceConfig: Record<ServiceConfigParams, string | number | boolean> = {
    port: 3000,
    basePath: "http://localhost",
    enableStripePayments: false,
};
console.log(serviceConfig.port); // prints 3000
