import './style.css';
import getAddressFromCep from './getAddressFromCep';
document.querySelector('button').addEventListener('click', handleClick);

export async function handleClick() {
    const cep = document.querySelector('input').value;

    try {
        const adressData = await getAddressFromCep(cep);
        document.querySelector('pre').innerHTML = JSON.stringify(adressData);
    } catch (error) {
        alert(error.message);
    }
}