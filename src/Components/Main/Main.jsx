import { Switch, Route } from "react-router";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Forms/Login/Login";
import { Registration } from "../Forms/Registration/Registration";
import { RenderProfile } from "./RenderProfile";

export function Main(props) {
    return (
        <Switch>
            <Route exact path="/profile/:id">
                <Switch>
                    {RenderProfile(props.data.users, props.className)}
                </Switch>
            </Route>
            <Route path="/dialogs">
                <Dialogs
                    className={props.className}
                    chats={props.data.users.get(1).chats}
                />
            </Route>
            <Route exact path="/friends">
                <Friends
                    className={props.className}
                    friends={props.data.users.get(1).friends}
                />
            </Route>
            <Route exact path="/news">
                <News
                    className={props.className}
                    posts={props.data.users.get(1).posts}
                />
            </Route>
            <Route exact path="/login">
                <Login
                    className={props.className}
                    fields={props.data.loginFields}
                />
            </Route>
            <Route exact path="/registration">
                <Registration
                    className={props.className}
                    fields={props.data.registrationFields}
                />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
