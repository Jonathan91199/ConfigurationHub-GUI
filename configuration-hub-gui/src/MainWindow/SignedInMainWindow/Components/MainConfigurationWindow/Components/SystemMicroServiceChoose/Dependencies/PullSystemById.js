import Axios from 'axios'
import { NotificationManager } from 'react-notifications'
import { setSelectedSystem, setSystemState } from '../../../../../../../Actions/MainReducerAction'

export default function PullSystemById(id, that) {
    console.log(id)
    Axios.get(`http://localhost:51241/api/Systems/${id}`, {
        headers: {
            "accept": "text/plain",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`
        }
    }).then(res => {
        that.props.dispatch(setSelectedSystem ({value : res.data}))
        that.props.dispatch(setSystemState({value : "ChooseMicroService"}))
        that.forceUpdate()

    }).catch(err => {
        NotificationManager.error(err.message, 'Error')
    })
}