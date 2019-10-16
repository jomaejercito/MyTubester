const API_URL = process.env.REACT_APP_API_URL;


const setVideos = videos => {
  return {
    type: 'GET_VIDEOS_SUCCESS',
    videos
  }
}

export const getVideos = () => {
  return dispatch => (
    fetch(`${API_URL}/videos`)
      .then(response => response.json())
      .then(videos => dispatch(setVideos)(videos))
  )
}