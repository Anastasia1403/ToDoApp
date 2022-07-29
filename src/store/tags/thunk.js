import { api, baseURL } from '../../api'
import { toggleColor } from '../colors/thunk';
import { addTagAction, deleteTagAction, editTagAction, saveTagsAction } from './actions'

export function fetchTags() {
    return dispatch => {    
        return baseURL.get(api.tags())
            .then(res => {
                const tagsObj = {}
                res.data.map(tag => tagsObj[tag.id] = tag)
            dispatch(saveTagsAction(tagsObj));
            })
            .catch(err => {
            console.log('error', err)
            });
    };
}

export function addTag({ title, colorId }) {
    return dispatch => {
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
                    dispatch(deleteTagAction(id))
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
                    dispatch(editTagAction({id: tag.id, tag: res.data}));
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