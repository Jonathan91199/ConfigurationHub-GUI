import Axios from 'axios'
import { setConfigData } from '../../../../../Actions/MainReducerAction'
import { NotificationManager } from 'react-notifications'


export default function PullConfig(id, that, callBack) {
    Axios.get(`http://${window.location.hostname}:51241/api/Microservices/${id}`, {
        headers: {
            "accept": "text/plain",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`
        }
    }).then(msRes => {
        // console.log(msRes.data.configIds.pop())the
        Axios.get(`http://${window.location.hostname}:51241/api/Configs/${msRes.data.configIds.pop()}`, {
            headers: {
                "accept": "text/plain",
                "Authorization": `Bearer ${that.props.userConnectedInfo.token}`
            }
        }).then(res => {
            that.props.dispatch(setConfigData({ value: res.data }))
            callBack(true)

        }).catch(err => {
            console.log(err.response.status)

            if (err.response.status === 404 || err.response.status === 400) {
                that.props.dispatch(setConfigData({ value: {} }))
                callBack(false)
            }
            console.warn(err)
            NotificationManager.error('Error Getting Config Data', '', 5000)

        })
    }
    )
}