const FinancioChat = () => {
    return (
        <div className="flex flex-col items-center">
            <iframe 
                src="https://copilotstudio.microsoft.com/environments/2ea4e4a4-1435-e566-9601-566d841cb715/bots/crd83_copilot/webchat?__version__=2"
                frameBorder="0"
                style={{ width: '100%', height: '500px' }} // Adjust height as needed
                title="Copilot Webchat"
            ></iframe>
        </div>
    );
}

export default FinancioChat;