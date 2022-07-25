import { api, baseURL } from '../../api/api'
import { addTaskAction, deleteTaskAction, editTaskAction, fetchTasksAction } from './actions'

export function fetchTasks() {
    return dispatch => {    
        baseURL.get(api.tasks())
            .then(res => {
                const tasksObj = {}
                res.data.map(task => tasksObj[task.id] = task)
            dispatch(fetchTasksAction(tasksObj));
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}

export function addTask({title, description, tags}) {
    const newTask = {title, description, tags, isCompleted: false}
    return (dispatch, getState) => {
        baseURL.post(api.tasks(), newTask)
            .then(res => {
                if (res.status === 201) dispatch(addTaskAction(res.data));
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}
export function deleteTask(id) {
    return dispatch => {    
        baseURL.delete(api.tasks(id))
            .then(res => {
                if (res.status === 200) dispatch(deleteTaskAction(res.data.id));
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}

export function editTask(task) {
    return (dispatch, getState) => {
        const prevTask = {...getState().todos[task.id]}
        const editedTask = {
            ...prevTask,
            ...(task.title && {title: task.title}),
            ...(task.description && {description: task.description}),
            ...(task.hasOwnProperty('isCompleted') && {isCompleted: task.isCompleted }),
            ...(task.tags && {tags: task.tags}),
        }
        baseURL.put(api.tasks(task.id), editedTask)
            .then(res => {
                if (res.status === 200) dispatch(editTaskAction(editedTask));
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}