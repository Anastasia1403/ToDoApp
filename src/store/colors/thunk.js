import { api, baseURL } from '../../api/api'
import { fetchTags } from '../tags/thunk';
import { fetchColorsAction, toggleColorsAction } from './actions'

export function fetchColors() {
    return dispatch => {    
        baseURL.get(api.colors())
            .then(res => {
                const colorsObj = {}
                res.data.map(color => colorsObj[color.id] = color)
            dispatch(fetchColorsAction(colorsObj));
            dispatch(fetchTags())
            })
            .catch(err => {
                console.log('error', err)
            });
    };
}

export function toggleColor(id) {
    return (dispatch, getState) => {
        const currentColor = {...getState().colors[id]}
        currentColor.isUsed = !currentColor.isUsed
        baseURL.put(api.colors(id), currentColor)
            .then(res => {
                if (res.status === 200) dispatch(toggleColorsAction(id));
            })
            .catch(err => {
                console.log('error', err)
            });
    };
}