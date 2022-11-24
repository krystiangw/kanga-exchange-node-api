import axios from 'axios';
const domain = 'https://api.kanga.exchange';
export function getAssetsList() {
    return axios.get(domain + '/api/v2/market/assets', {});
}
//# sourceMappingURL=api.js.map