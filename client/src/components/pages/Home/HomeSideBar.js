import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core"
import React, { useContext } from "react"
import { AuthContext } from "../../../context/authContext/authContext"
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded"
// import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded"
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded"
//import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded"
import { useHistory } from "react-router-dom"
import { NoticeCard } from "./Notice/NoticeCard"
import { API } from "../../../utils/proxy"
import ChatIcon from '@mui/icons-material/Chat';

export const HomeSideBar = () => {
  const authContext = useContext(AuthContext)
  const history = useHistory()
  return (
    <div>
      <Paper variant="elevation" elevation={3}>
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              history.push(`/profile/${authContext.user._id}`)
            }}
          >
            <ListItemIcon>
              <Avatar
                alt={authContext.user.name}
                src={`${API}/pic/user/${authContext.user._id}`}
                style={{ height: "50px", width: "50px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={<b>{authContext.user.name}</b>}
              secondary={
                <Typography variant="subtitle2" color="textSecondary">
                  {authContext.user.role === 0 && "Student"}
                  {authContext.user.role === 1 && "Faculty"}
                  {authContext.user.role === 2 && "Admin"}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => {
              history.push("fellows")
            }}
          >
            <ListItemIcon>
              <PeopleAltRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="button">Fellows</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="button">Chats</Typography>}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/notices")
            }}
          >
            <ListItemIcon>
              <BookmarksRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="button">Announcements</Typography>}
            />
          </ListItem>
        </List>
      </Paper>
      <NoticeCard />
    </div>
  )
}
