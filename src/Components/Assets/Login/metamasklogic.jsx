export async function metaCall() {
    
        try {
          if (typeof window.ethereum !== 'undefined') {
            // Request Metamask to connect
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Metamask connected!');
            // You can now interact with the user's wallet using web3
          } else {
            console.log('Metamask not available.');
          }
        } catch (error) {
          console.error('Error connecting to Metamask:', error);
        }
      
                
}