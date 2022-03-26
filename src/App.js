import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID='333638fe-8d68-4e5d-9610-dfa2aea88da4'
            userName='yayaworking7'
            userSecret='maketime'
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
       />
    ); 
}

export default App;