import "regenerator-runtime";
import proxymise from "proxymise";

/** 
* The NanoMes Class is the main class to be imported into your application to allow communication with NanoMes-api
*
* @class NanoMes
* @constructor
*/



class NanoMes {

    /**
    * The constructior for NanoMes
    * 
    * constructor
    * @param {Object} obj An Object comprised of a endpoint (url) and a jwt_token
    */
    constructor(obj){
        this.endpoint = obj.endpoint; 
        this.jwt_token = obj.jwt_token || null;
        console.log(`NanoMes has started on ${this.endpoint}`);
    }

    operations = {
        "==" : function (operand1, operand2) {
            return operand1 == operand2;
        },
        "!=" : function (operand1, operand2) {
            return operand1 != operand2;
        },
        ">=" : function (operand1, operand2) {
            return operand1 >= operand2;
        },
        "<=" : function (operand1, operand2) {
            return operand1 <= operand2;
        },
        "<" : function (operand1, operand2) {
            return operand1 < operand2;
        },
        ">" : function (operand1, operand2) {
            return operand1 > operand2;
        }
    };

    



    maths = {
        val : 5,
        get value(){
            return this.val
        },
        inc : () => {
            this.maths.val = this.maths.val + 1
            return this.maths
        },
        dec : () => {
            this.maths.val = this.maths.val - 1
            return this.maths
        }
    }


    Hello = {
        get : {
            sync : (name) => {
                return `Hello (Sync) , ${name}`;
            },
            async : async (name) => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(`Hello (Async), ${name}`);
                    }, 100)
                })
            },
            api : async (name = 'Anne') => {
                return await this.api_fetch(`hello/${name}`) 
            }
        }
    }


    //using proxymise
    // these chainable functions only work with proxymise
    Stations = {
        get : {
            data : null,
            // choose one, all or query
            all : async () => {
                this.Stations.get.data = await this.api_fetch(`stations`) 
                return this.Stations.get
            },
            one : async (docuemntId = 'x') => {
                this.Stations.get.data = await this.api_fetch(`stations/${docuemntId}`) 
                return this.Stations.get
            },
            query : () => {
                this.Stations.get.data
                return this.Stations.get
            },
            // choose one, all or query
            filterTemplate : (slug) => {
                this.Stations.get.data = this.Stations.get.data.filter( (station) => {
                    return station.template_slug == slug;
                });
                return this.Stations.get
            },
            // choose one, all or query
            filterData : (parameter,operation,slug) => {
                this.Stations.get.data = this.Stations.get.data.filter( (station) => {
                    try{
                        return this.operations[operation](station.data[parameter].value.content, slug)
                    }
                    catch{
                        return false
                    }
                });
                return this.Stations.get
            }
        },
        post : {
            one : async (station) => {
                return await this.api_fetch(`stations`, 'POST', station)
            }
        },
        delete : {
            one : async (station) => {
                return await this.api_fetch(`stations`, 'DELETE', station)
            }
        },
        async query(query){
            return await this.api_fetch(`stations/query`, 'POST', query)
        }
    }





    //using proxymise
    // these chainable functions only work with proxymise
    Operations = {
        get : {
            data : null,
            // choose one, all or query
            all : async () => {
                this.Operations.get.data = await this.api_fetch(`operations`) 
                return this.Operations.get
            },
            one : async (docuemntId = 'x') => {
                this.Operations.get.data = await this.api_fetch(`operations/${docuemntId}`) 
                return this.Operations.get
            },
            query : () => {
                this.Operations.get.data
                return this.Operations.get
            },
            // choose one, all or query
            filterTemplate : (slug) => {
                this.Operations.get.data = this.Operations.get.data.filter( (operation) => {
                    return operation.template_slug == slug;
                });
                return this.operation.get
            },
            // choose one, all or query
            filterData : (parameter,operation,slug) => {
                this.Operations.get.data = this.Operations.get.data.filter( (operation) => {
                    try{
                        return this.operations[operation](operation.data[parameter].value.content, slug)
                    }
                    catch{
                        return false
                    }
                });
                return this.Operations.get
            }
        },
        post : {
            one : async (operation) => {
                return await this.api_fetch(`operations`, 'POST', operation)
            }
        },
        delete : {
            one : async (operation) => {
                return await this.api_fetch(`operations`, 'DELETE', operation)
            }
        },
        async query(query){
            return await this.api_fetch(`operations/query`, 'POST', query)
        }
    }
    






    //using proxymise
    // these chainable functions only work with proxymise
    Products = {
        get : {
            data : null,
            // choose one, all or query
            all : async () => {
                this.Products.get.data = await this.api_fetch(`products`) 
                return this.Products.get
            },
            one : async (docuemntId = 'x') => {
                this.Products.get.data = await this.api_fetch(`products/${docuemntId}`) 
                return this.Products.get
            },
            query : () => {
                this.Products.get.data
                return this.Products.get
            },
            // choose one, all or query
            filterTemplate : (slug) => {
                this.Products.get.data = this.Products.get.data.filter( (product) => {
                    return station.template_slug == slug;
                });
                return this.Products.get
            },
            // choose one, all or query
            filterData : (parameter,operation,slug) => {
                this.Products.get.data = this.Products.get.data.filter( (product) => {
                    try{
                        return this.operations[operation](product.data[parameter].value.content, slug)
                    }
                    catch{
                        return false
                    }
                });
                return this.Products.get
            }
        },
        post : {
            one : async (product) => {
                return await this.api_fetch(`products`, 'POST', product)
            }
        },
        delete : {
            one : async (product) => {
                return await this.api_fetch(`products`, 'DELETE', product)
            }
        },
        async query(query){
            return await this.api_fetch(`products/query`, 'POST', query)
        }
    }








    //using proxymise
    // these chainable functions only work with proxymise
    Orders = {
        get : {
            data : null,
            // choose one, all or query
            all : async () => {
                this.Orders.get.data = await this.api_fetch(`orders`) 
                return this.Orders.get
            },
            one : async (docuemntId = 'x') => {
                this.Orders.get.data = await this.api_fetch(`orders/${docuemntId}`) 
                return this.Orders.get
            },
            query : () => {
                this.Orders.get.data
                return this.Orders.get
            },
            // choose one, all or query
            filterTemplate : (slug) => {
                this.Orders.get.data = this.Orders.get.data.filter( (order) => {
                    return order.template_slug == slug;
                });
                return this.Orders.get
            },
            // choose one, all or query first
            filterData : (parameter,operation,slug) => {
                console.log(this.Orders.get.data)
                this.Orders.get.data = this.Orders.get.data.filter((order) => {

                        // this.operations[operation] // this is the function, it accepts two paramerers
                        console.log("The Order:")
                        console.log(order)
                        console.log(order.status)
                        console.log(order[parameter] + " " + operation + " " + slug)
                        console.log(this.operations)
                        let result = this.operations[operation](order[parameter], slug)
                        console.log(result)
                        return result
                        // return
             
                });
                return this.Orders.get
            }
        },
        post : {
            one : async (order) => {
                return await this.api_fetch(`orders`, 'POST', order)
            }
        },
        delete : {
            one : async (order) => {
                return await this.api_fetch(`orders`, 'DELETE', order)
            }
        },
        async query(query){
            return await this.api_fetch(`orders/query`, 'POST', query)
        }
    }







    //using proxymise
    // these chainable functions only work with proxymise
    Logs = {
        get : {
            data : null,
            // choose one, all or query
            all : async () => {
                this.Logs.get.data = await this.api_fetch(`logs`) 
                return this.Logs.get
            },
            one : async (logId = 'x') => {
                this.Logs.get.data = await this.api_fetch(`logs/${logId}`) 
                return this.Logs.get
            },
            query : () => {
                this.Logs.get.data
                return this.Logs.get
            },
            // choose one, all or query
            filterTemplate : (slug) => {
                this.Logs.get.data = this.Logs.get.data.filter( (operation) => {
                    return operation.template_slug == slug;
                });
                return this.operation.get
            },
            // choose one, all or query
            filterData : (parameter,operation,slug) => {
                this.Logs.get.data = this.Logs.get.data.filter( (operation) => {
                    try{
                        return this.Logs[operation](operation.data[parameter].value.content, slug)
                    }
                    catch{
                        return false
                    }
                });
                return this.Logs.get
            }
        },
        post : {
            one : async (operation) => {
                return await this.api_fetch(`logs`, 'POST', operation)
            }
        },
        delete : {
            one : async (operation) => {
                return await this.api_fetch(`logs`, 'DELETE', operation)
            },
            all : async () => {
                return await this.api_fetch(`logs_all`, 'DELETE')
            }
        },
        async query(query){
            return await this.api_fetch(`logs/query`, 'POST', query)
        }
    }








    /**
    * api_fetch
    * fetching the data fromt the api/v1/
    * @param {string} _path eg : uuid
    * @param {string} _method  eg : 'GET' , 'POST', 'DELETE'
    * @param {object} _body 
    * @return {JSON} Did it resolve? 
    */
    api_fetch = async (_path, _method = 'GET', _body = {}) => {

        let req_options = {}
        req_options.method = _method

        if (_method == 'GET') {
            req_options.headers = {
              "Authorization": this.auth_header_string
            }
        }

        if (_method == 'POST') {
            req_options.body = JSON.stringify(_body);
            req_options.headers = {
                "Authorization": this.auth_header_string
              }
        }


        if (_method == 'DELETE') {
          req_options.body = JSON.stringify(_body);
          req_options.headers = {
            "Authorization": this.auth_header_string,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
          req_options.mode = 'cors';
        }
        let req  = await fetch(`${this.endpoint}/api/v1/${_path}`, req_options)
        return await req.json()
    }



};


module.exports = proxymise(NanoMes)