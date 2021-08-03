export const parser = (text) => {
    if(text.includes('+')) {
        return text.split('+').map(num => parseFloat(num))
    }
    if(text.includes('-')) {
        return text.split('-').map(num => parseFloat(num))
    }
    if(text.includes('/')) {
        return text.split('/').map(num => parseFloat(num))
    }
    if(text.includes('x')) {
        return text.split('x').map(num => parseFloat(num))
    }

    return[0, 0]
}