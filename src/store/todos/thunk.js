import moment from 'moment';
import { api, baseURL } from '../../api'
import { addTaskAction, deleteTaskAction, editTaskAction, saveTasksAction } from './actions'

export function fetchTasks() {
    return dispatch => {    
        return baseURL.get(api.tasks())
            .then(res => {
                const tasksObj = {}
                res.data.map(task => tasksObj[task.id] = task)
            dispatch(saveTasksAction(tasksObj));
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}

export function addTask({title, description, tags, deadline}) {
    const newTask = {title, description, tags, deadline, isCompleted: false, createdAt: moment(new Date()).format()}
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
                if (res.status === 200) dispatch(deleteTaskAction(id));
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
            ...(task.deadline && {deadline: task.deadline}),
            ...(task.tags && {tags: task.tags}),
        }
        baseURL.put(api.tasks(task.id), editedTask)
            .then(res => {
                if (res.status === 200) dispatch(editTaskAction({id: task.id, task: editedTask}));
            })
            .catch(err => {
            console.log('error', err)
            });
        };
}