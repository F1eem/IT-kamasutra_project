const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messageData: [
    { id: 1, message: "Yo" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I am fine!" },
  ],
  dialogData: [
    {
      id: "/Dialogs/1",
      name: "Dimich",
      avatar:
        "data:image/png;base64,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",
    },
    {
      id: "/Dialogs/2",
      name: "Valera",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: "/Dialogs/3",
      name: "Sveta",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: "/Dialogs/4",
      name: "Sasha",
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBASEBIREBUXERASFRUQDw8YFhUYFxUWFhUXGBUZHSggGB0lGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dICItLSstLS0tLS0tLS0tLSstKy0tLS0tLS0rLS0tLS0rLS0rLS0tLS0tKzctLTctLTctLf/AABEIALoBDwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABFEAABAwICBgYHBAcHBQAAAAABAAIDBBEhMQUGBxJBURMiYXGBkSMyQlKhscEUcpLRM0Njc4Lh8CQlNWKissIVFpOz0v/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQACAgMBAAIDAAMAAAAAAAABAgMREiExBEFREyIyFGFx/9oADAMBAAIRAxEAPwDqKKqyWXa89SiqslkFKKqyWQUoqrJZBSiqslkFKKqyhBChWek9MU9OPTzRxk5Nc4bzu5gxPkueaxa7TTXZTkwRZbwPpH+PsjsHms8matPWuPDa/jf9Jabpqf8ATzMYfdvd34W3PwWAn2i0gPVbUSDm2IAf6iFzQDM2uTmXHE95UF9sx5Lkt9VvxGnZX5K/mdukDaRS8YqkdpZH9HLLaO1woZiA2drTylDmHzcLfFcddMOC8JmAi4wKiPqv+Sflp+H0MCDiMe4hSuBaO03Uxjo4qiaIXyZIQPLILJU+vekICA6UTDlKxpv4ixHmt4+qs+wwn5bR47Wi0jV7aRTzEMqB9lfzLrxn+PDd8fNbu0ggEEEHEEG4PceK3reto3DntS1Z1MCKqyWVlVKKqyWQU2RVWSyClFNlNkFKKqyWQUoqrJZBKKbJZQlCKbJZBCKbIghFNkQQimyIaQuca7bQdxzqeiILh1XzWBDTxawZE9p8Fe7UdZjBEKaF1pJQS8jNkeWHIuOHcCuTUsePYFy582v61deDDv8AtZfR7ziZJHOe92LnPJJ8yrgEZlWwevGpn4BcXrujpcvq+QVP2m+fwWKll5u8lQyoI43Cnijkv6iP2m+Nl4tnVbZgQrOTMpEEy9HvxVzJJvNHxWPe/JekcmCmYViVW6ts1Q1vmoyGuJlgvjGTct7WE5fdyK1N0i9I5FMWms7hE1raNS+jtH1jJomSxOD2OF2kfXkeCuFx/ZlrEYakU7z6KYgC/sScCOW9kfBdhXoY8nOu3nZcfC2kIqlFlozQimyWQQimymyClFVZRZBCKbJZBKKpFC2lKKpENKUVSIaUoqkQ0pRVLH6fquipamTC7YJnC54hhIUTJEblwjWjSRqayomJuC8tb2Nb1W/AX8VZxGzb81bNaT3L2e7yXmTO5erWNQrMmCsJ5+SuIYXyyMiiBc9xDQB2rfdFbK7gGqnN/dhAsOzfcPokaj1MRM+OatsVQ4ELsw2YUNrXnvz6X+Sx2kdlLCD9nqHNPATNBH4m4/BTzgnHLl0ElsFS962Or1B0hHIGCAyXOD43As8SbW8Vs2iNk7iAaqfdPuQC/m9w+QU7iO1eMy5ndSCu1R7MqADFsz+0zOHysrar2X0bh6N00R7Hhw8nBRzhb+KXHy5ejXrdNL7M6mO7oHsqBy9V/kcD5rTKmnfG4ska6Nwza8EEeCtuJ8Vmsx696NxMkQbg4yRhvYS4bp87L6bA5r5Xc/ku+7MtPOq6FvSHekid0LyczYAsce0tI8QV0YNRMw5fpjcRLa0VSLpculKKpENKUVSIaUoqkQ0pRVIiNCKUUJQilEEIpRBCKUQU2XAtdtDT0lQ5srnvjc5zopHOJDgTex5OF8Qu/rWdpAb/ANLrC5odaPq3ANnEgAjkcc1nlpyhritxs4MJO1elNDJM8RwsdI84ANH9W71Yx4uA5kD4r6D0VoqCnbaGJkeVy1oue85lcFv6vSpXkw2o+qLaNvSSWdO4WJzDB7rfqVt7QvNq9WlZ7231qNQ9GtVQaoaVWpUU7qbqrRSPMhebgvYrycVCYeLgsHrPq7DWxFkgs4epIAN5h+o7FnXFeTlC+t+vnLSNC+CWSKQWcxxafDiOwjFdD2H1Vqiriv60TJB3sdun4PCstrNAG1EMwH6SMtd3sOHwcPJU7HjbSXfTzfNhXVit3EuHPXqYdvRSi7XnIRSiCEUoghFKIIRSiAiIiRERAREQEREBavtM/wALqu6P/wBjVtC1zaHHfRdZ2Rb34XA/RVt5K1P9Q4Ho2HenhbzljHm4L6FBXBtXYt6sph+2j+Dr/RdV1l0m4ehjvcjrEZ45ALzb9vYw+Sv9J6y08BIc4vcM2xi5HecgsUNocF8Ypu/0f/0tdGrlS/FkRsfeLW/MrwqtUqsYiLe+69h+qiIhp23/AEbrjSyg9Z0di1pEjbWLsBiLjPBbE2RcFqqWWK4kY+O4sd5pF/HwC3jUnTUkkrYySR0IvfmywB8RZJjSvrom+oMitOlVppSrLIZXtzaxzh3gKu08F1X6SjiDekeG7x3WjiT2BaxU7QaYEhrZX2NrhrQD3XK0HS2knyuj6ziWsIzxJcTvHxuqqPV+qksWQPtzcA0f6rK2v2hvVNr3TuNnMlZ2kNPyK2ClrWSt3o3B45g/Pkuct1TqwP0Y7fSR3+a96GGekeHbrmHiCOq4ciRgVEwtC82rwXpYn+7MB4OaR8wFgdkX+Jt/cT/8Vs2vkjZtFvkHvQu7jvgEfErWdkQ/vNv7if8A4rXD7Dl+n8/+O4oiL0XliIiAiIgIiICIiCbJZSihKLJZSiCLJZSiCLJZSiCLLC66R72jq1twL08pz5NJ+izL3WBPIErWNIVAlZK13tMkaL9rSLLDNl4Rr9un58E5Jmf05hszha6scXAEthc5txkd5ov5ErqMVIwPdJu9Y2uTjwthyyXMtmA/tcn7h3+9i6iSbG2dja+V7YLht69PF/l4aR0lFA3fmkZE3gXutc8mtzcewLAS66M/VRTyD3i2ONp7t83KzkerMbKaeqkcaqpMT/SOGEeBu2KPJlhfHPDNcj2tR032inFIZS3oAXCTe3d6+bb8bZ9q3x4a8eU9sb55idVh0nR+s0M7uiljfE44BlRG2zuxr8Wk9izFHoyGJxdFExhcMS1oGC0XZNTPm6BlQ3pGuE7SH8Yt27bn71rHuXRI4DHdhdv7ri0OObm+ySeJtYHtBUZ8UU1r8rYcvP1KhwBBBFwRYg8VXZRZc7diX0tLSMMnRwxAZuLRxNgAc7k4ADMrDu11F+pT1Dm3sHOEUd+4PN1tUujmvjnmludxhbG0Ylot6WQD3i0kA8ADbMriO1aOD7a0UpkMQhZbpL7u9c725fE8LnmunHirNeVnNkzTWdVdPo9b6dzg2Rzqdx4VMe4L8g/1fis84Bws4Ag8DYgrn+yqldN0DKhgla5szS2UXvFwvftyPct3i0IKSVzIZXOgIu2KS7jCeTXk3Lc8DkozYYp3C+HLz6mGM1k0fH9gqY7ENEb3jHIt64+IC1LY1FeulecN2mfnzc9g+hW5a1n+xVX7mT5LVNlEYH2uQ5eiZ/uP5LOluPZmpzmKuxJZYvQ9ZvEt8QsqvQx35128rLinHbjKLJZSiuzRZLKUQRZLKUQRZLKUQERFCRERAREQEREFErbtcOYIXOtLzEOsMLLpC0DW+n6OV54Fpd8MVyfVXqJeh8FtTNWsbO6QiqneMuit4lwP0XSY4lz7Z5OBUSMPtR3H8JH5nyXTIQuOs7h3dVjpRFGRkSOBtxVg/V2nd60TXY3s4XA7hwWaa1VWWlZmPJY21PsMbDo9jPUYG8MAq3iyvS1WdRmAot/2vV5XUgq5bAF5TxWVFtp6O6sp9A07/WiYeOLQslTm7QvcBXiZjyWdtfljaPRzIi4xDcJFiRe9uV+Sl0KyNl5yNS0zPcprOvGra2R/2Kp/dOWl6ru3KYsGB6UvcRxO6A3yW9a5yBtHPfi0NHe4gLSdWmAwzk5tfFbt3g4H5LOZ701iNzt0HVS7jvcm/NbKsPqtTblOCc3G/hwWYXpYK6pDyPqtyyyIiLZziIiAiIgIiIJREUAiIgIiICIiAtT2gQ3ge7lE9bYtc17hJo5yBe0T79nH81j9Ebxy6flnWSHJtCVvQzxScGux7jgfgV2amkBAINwcQuGQldO1J0kHQNjc7rNJaL8QMQO2wXmUnt60xuG4Aqq68GvUh622xmFcuRtyPyWAbWMa298Vnd9avpnR1EJN+aZ0eZLGzEX/AIRiolamoex07bmq4tLhxs4rEujpXbphqRYkNs8PJvYm17cgc1T/AHe4Fj6l+9b1mGRrRfiOrYqvTXcNj0fKDN1T7JJt8FmLrE6FooYmehcZLjFxeHE+KyO+rR0yt3L1JXnI5U76ta+rbGwuce4XzPAJMoiGlbR9Ifo4Af2jvk36rDamRb8kjf8AK13kbfVYzS1U6WV8j83G/dyHgszs7aTUyAC/oTl99qxid2beOuUTLRsA4NC9lRCyzWjkAFWvZr48G/dpERFKoiIgIiICIiCUUoidIRSiGkIpRDSEUohpSrfSNN0kMsfvxyM/E0j6q6RRPaY6fOUd24cRgfBZKgqXNc17SRYg4YK7160SaaukFrMkJljPCzj1h4Ov5hYuKXIZ+C8W9ZrbT26W5REup6H0+yZuJDDdresRiSLq80rpNlPE6R+QwAGbjwAXK4pbG4VzpXSrpmxscSWssbcza17+eCmMnS0wvK7WCebrOeWNOTI3EAd5HrKy+zvdv7rXO9UA7pzPrG62TUzR8ckckj2h3XLG7wyAAJt5rK1Ojd31CQO3EfmkV36tER41STQk790wxbwGfXYPhdedVo97X+obbpBsL2dwyW0tpXjJ7R+IKG0Tr+sP4W/mp/jhfi1CnmfHulrnxOIF7Eg3HMclturOs5lf0E9t+12vAsH2zBHA/NZGPQ8W6RI0PJFutjbu5LntW/oKklhIdFI6x+6cO/D5qO6s5iJdTqKxrLbzgCcgSLnC60HWXTfT7obcAA4X/rHtVhpDSTpXBzib2bfssLFY6R6i19kRpbzPut72R0vWqpbcI4x43cfk1c9lcu16i6JNNRRtcLPfeV/YXZDwFgt/kpu+/wBOX676x6/bYEUovUeVpCKUQ0hFKIaQilENIRSiGhERQkRFKCEREBFKhAREQYTW7V5tbTmM2a9vWjf7ruR7Dkf5Lh9TTSQSuilYWPabFp+nMdq+i7LAa1aqw1rOt6OVo6kgGI7HD2m9i5s+Dn3Hrq+fPw6nxxuG5GPzXo8ZknlZe2mtCVFG607Db2ZG3LD3Hh3FWYmFj22tbNebasxOpenW0WjcNg0Dp6SnZuANe25NnXBBOeIV5W65zEWjjYw8zd3wyWubwaABjiBcnmpqHC3Vz7VHKU6X3/dFT+y/8f8ANe9HrhUsdi2N45bhHkQVjDC2wF/Z+KopgLNvbiPyU8pG0S65SEdWJjDzJJ+C1edxke8uJJdd1+ZU1EgBHL8l4TvsRx78seSjcz6K34AXOOWKtJ5P6uvTfLnbrWl5NgGtBJPgFvGqmzxzi2WuG63MQ8XffPAdivjx2vPTPJkrSNytNnWqhne2qnb6JhvGD+scMjb3Rn2ldZURRhoDWgNAAAAAAAGQAUr1cWOMcah5WXLOS25EUotGSEUoghFKIIREQERSgIiIkREQEREBERAREQEREFE0LXtLXtDmnAhwBB8CtP0ts6ppCXQF1M7Ozesz8Jy8CtmqtLQR+vKwHlvXPkFjpdbaUZOe7ujd9Vnetber0tav+WgV+oFZFvOb0czQCbseQe/dctafBIPWY/O990rrI1xhmD2RRTvJYcmswuLXNytULCMCLLhzYa1n+r0vmva8TyacXnKx+KRBxIIY7jkCtxDFcw03FY8IdOmpUuh55i1jWYlwDS82GJW36O2ZONjUzgD3IRc/iP5K+pbRua8gndIdYWubY4LKQa8Urja0o72D6FdHz4qTuZcf1ZL01FWS0Nq9TUo9BE1p4vPWef4j9FlVh4NZ6V36zd++14+Nlk4Khjxdj2vH+VwPyXdEREdPOtuZ7eqIisgREQEREBERAREQEREEoiKAREQEREBERARERKy0tpFlPEZH9wHFx4ALnWktNzTkl7yG8GNJDR+aze0Vx3oBc23Xm3C9xitRaqWlpWFYUqAiqst43vheJIza39EHsWwQawwSAdM0sdzAuPMYrDrH1QxwVLUi3rSmW1PG4CopeEzB3qiXSdO0fpWu+6CVpqFU/gq1/wCVdmdI6aMgLIgWg4E+0fyVrTQ7oxzPwUUg6q91pWsVjUML3m07lKhkhabtJaebSQfMIVQVZVt2rWtTt9sVQ7eBIDXnMHgHHiO1buuKyLr+iXEwQkm56KPE/dCvWWd4XaIisoIiICIiAiIgIiIP/9k=",
    },
    {
      id: "/Dialogs/5",
      name: "Victor",
      avatar:
        "data:image/jpeg;base64,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",
    },
  ],
  newMessageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageText: action.postMessage,
      };
    }
    case SEND_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,
        messageData: [...state.messageData, newMessage],
        newMessageText: "",
      };
    }
    default:
      return state;
  }
};

export const onSendMessageClick = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  postMessage: text,
});

export { dialogReducer };
