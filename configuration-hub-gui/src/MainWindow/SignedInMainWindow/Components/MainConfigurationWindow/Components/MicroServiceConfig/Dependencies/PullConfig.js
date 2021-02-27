import Axios from 'axios'
import { setConfigData } from '../../../../../../../Actions/MainReducerAction'
import { NotificationManager } from 'react-notifications'
export default function PullConfig(id, that, callBack) {
    Axios.get(`http://${window.location.hostname}:51241/api/Configs/${id}`, {
        headers: {
            "accept": "text/plain",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`
        }
    }).then(res => {
        that.props.dispatch(setConfigData({ value: res.data }))
        callBack()

    }).catch(err => {
        console.warn(err)
        NotificationManager.error('Error Getting Config Data', '', 5000)
    })
}