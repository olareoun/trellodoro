import makeRequest from './request_helper'

const KEY = "fb4cbce70816e1b5bd206e3d1c83bd46"
const TOKEN = "9d25bfc69d1f430c74a75d3d87f9c09a2410ea292cd35a3a18c868e6953f402f"

export function getBoards(member) {
  return makeRequest(
    `https://api.trello.com/1/member/me/boards?key=${KEY}&token=${TOKEN}`
  )
}

export function getCards(boardId) {
  return makeRequest(
    `https://api.trello.com/1/boards/${boardId}/cards?key=${KEY}&token=${TOKEN}&fields=name,idList,url`
  )
}
