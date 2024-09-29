const FinancioChat = () => {
    return (
        <div className="flex flex-col items-center bg-fEggWhite-1 py-5">
            <div className="w-[60%] ">
                <iframe className="rounded-lg shadow bg-white"
                    src="https://copilotstudio.microsoft.com/environments/2ea4e4a4-1435-e566-9601-566d841cb715/bots/crd83_copilot/webchat?__version__=2"
                    frameBorder="0"
                    style={{ width: '100%', height: '500px' }} // Adjust height as needed
                    title="Copilot Webchat"
                ></iframe>
            </div>
            
        </div>
    );
}

export default FinancioChat;