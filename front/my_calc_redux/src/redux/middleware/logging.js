/*export function logging(store){
    return function(next){
        return function(action){
            console.log('работает мидлвар')
            return next(action)
        }
    }
};*/
// или так
export const logging = store => next => action => {
    console.log(`done: ${action.type}`)
    return next(action)
}