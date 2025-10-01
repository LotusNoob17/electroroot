import axios from 'axios';

const configData = {
    url_back: 'http://127.0.0.1:3015/logic/',
    base_path: ''
}

const API_URL = configData.url_back
export const ajax = async (options) => {
    try {
        console.log('ajax options:: ', options)
        const method = options.method ? options.method : 'post'
        const url_base = options.url_base ? options.url_base : API_URL
        const path = options.path ? options.path : ''
        const data_send = options.data_send ? options.data_send : {}
        // const headers = options.headers ? options.headers : {
        //     'Content-Type': 'application/json'
        // }
        console.log('data_send::: ', data_send)
        console.log('url_base + path::: ', url_base + path)
        console.log('method::: ', method)
        const data_response = await axios({
            method,
            url: url_base + path,
            data: data_send
        });
        console.log("pasa carga data")
        return data_response
    } catch (error) {
        console.log('Error en la peticion:', error.response.data.error);
        return { data: { success: false, message: error.response.data.error } }

    }
}

// export const ajaxBytes = async (options) => {
//     try {
//         const method = options.method ? options.method : 'post'
//         const url_base = options.url_base ? options.url_base : API_URL
//         const path = options.path ? options.path : ''
//         const data_send = options.data_send ? options.data_send : {}
//         const headers = options.headers ? options.headers : {
//             'Content-Type': 'application/json'
//         }
//         console.log('URL base:_:::::', url_base);
//         var data_response = await axios({
//             method,
//             url: url_base + path,
//             headers: headers,
//             responseType: 'arraybuffer',
//             data: data_send
//         });
//         console.log('Entroooooo:::::', data_response);


//         const contentType = data_response.headers['content-type'];
//         console.log('Valorrrrrrrrrrr del content typeeeeeee:', contentType);

//         let dataRes = {}
//         var data = data_response.data
//         // console.log('data::::::::::: ', data)
//         if (contentType.includes('image')) {
//             console.log('image_')
//             const blob = new Blob([data_response.data], { type: contentType });
//             console.log('image_______ 1')

//             const imageUrl = URL.createObjectURL(blob);
//             console.log('URL de la imagen:', imageUrl);
//             dataRes['isImage'] = true;
//             dataRes['imageUrl'] = imageUrl
//         } else {
//             const textDecoder = new TextDecoder();
//             const jsonData = JSON.parse(textDecoder.decode(new Uint8Array(data_response.data)));
//             console.log('Respuesta JSON:', jsonData);
//             dataRes['isImage'] = false;
//             dataRes['nameApp'] = jsonData.nombreEmpresa;
//         }
//         console.log('dataREs:::::: ', dataRes)
//         return dataRes
//     } catch (error) {
//         //onsole.log('Error en la peticion:', error.response.data.error);
//         const textDecoder = new TextDecoder();
//         const jsonData = JSON.parse(textDecoder.decode(new Uint8Array(error.response.data)));
//         console.error('Error fetching data:', jsonData.error);
//         //throw jsonData.error || 'Error desconocido al obtener los datos';
//         return { data: jsonData.error }

//     }

// }

// export const filter = (params, row) => {
//     let count = 0
//     let count_match = 0
//     for (var a in params) {
//         console.log('a:::: ', a)
//         console.log('params:::: ', params)
//         console.log('row:::: ', row)
//         if (!params[a])
//             continue
//         if (!row[a]) {

//         } else {
//             if (row[a].includes(params[a]))
//                 count_match++
//         }

//         count++
//     }
//     if (count == count_match)
//         return true
//     return false
// }

// export const formatCurrency = (number) => {
//     var formatted = new Intl.NumberFormat("en-US", {
//         currency: 'COP',
//         minimumFractionDigits: 0
//     }).format(number);
//     return formatted;
// }

// export const formatDate = (f) => {
//     f = new Date(f)
//     return f.getFullYear() + "/" +
//         (f.getMonth() + 1).toString().padStart(2, '0') + "/" +
//         f.getDate().toString().padStart(2, '0');
// }