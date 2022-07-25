import { api, baseURL } from '../../api/api'
import { toggleColor } from '../colors/thunk';
import { fetchTasks } from '../todos/thunk';
import { addTagAction, deleteTagAction, editTagAction, fetchTagsAction } from './actions'

export function fetchTags() {
    return dispatch => {    
        baseURL.get(api.tags())
            .then(res => {
                const tagsObj = {}
                res.data.map(tag => tagsObj[tag.id] = tag)
            dispatch(fetchTagsAction(tagsObj));
            dispatch(fetchTasks())
            })
            .catch(err => {
            console.log('error', err)
            });
    };
}

export function addTag({ title, colorId }) {
    return (dispatch, getState) => {
        baseURL.post(api.tags(), { title, colorId })
            .then(res => {
                if (res.status === 201) {
                    dispatch(addTagAction(res.data));
                    dispatch(toggleColor(colorId))
                }
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}

export function deleteTag(id) {
    return dispatch => {    
        baseURL.delete(api.tags(id))
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteTagAction(res.data.id))
                    dispatch(toggleColor(res.data.colorId))
                }
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}

export function editTag(tag) {
    return (dispatch, getState) => {
        const prevColor = getState().tags[tag.id].colorId
        baseURL.put(api.tags(tag.id), tag)
            .then(res => {
                if (res.status === 200) {
                    dispatch(editTagAction(res.data));
                    if (prevColor !== res.data.colorId) {
                        dispatch(toggleColor(prevColor))
                        dispatch(toggleColor(res.data.colorId))
                    }
                    
                }
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}