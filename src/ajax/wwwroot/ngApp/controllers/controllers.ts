namespace ajax.Controllers {
    export class ProductsController {
        public products;

        constructor(TaxService) {
            this.products = [
                {
                    name: `Milk`,
                    price: 1.90,
                    tax: TaxService.CalculateTax(1.99)
                },
                {
                    name: `Creepy Pasta`,
                    price: 5.99,
                    tax: TaxService.CalculateTax(5.99)
                },
                {
                    name: `Bread`,
                    price: 2.49,
                    tax: TaxService.CalculateTax(2.49)
                }
            ];
        }
        /*       constructor($http: ng.IHttpService) {
                   $http.get(`/api/products/`).then((response) => {
                       this.products = response.data;
                   });
       
               }        */
    }
    angular.module(`ajax`).controller(`ProductsController`, ProductsController);
}
