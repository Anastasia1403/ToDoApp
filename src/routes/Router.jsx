import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Dashboard from '../pages/Dashboard/Dashboard'
import SettingsPage from '../pages/SettingsPage'
import TaskItemPage from '../pages/TaskItemPage'
import TasksPage from '../pages/TasksPage'

function Router() {
    return (
        <Layout>
            <Routes>            
                <Route path="/" element={<Dashboard />}/>
                <Route exact path="/tasks" element={<TasksPage />}/>
                <Route path="/tasks/:id" element={<TaskItemPage />}/>
                <Route path="/settings" element={<SettingsPage />}/>
            </Routes>
        </Layout>
    )
}

export default Router