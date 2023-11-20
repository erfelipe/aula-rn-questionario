import { createContext, useState } from "react";

export const AnswersContext = createContext([]);

export const AnswersProvider = ({ children }) => {

    const [resp, setResp] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);

    const defineResp = (ind, option) => {
        const copyResp = resp;
        copyResp[ind] = option;
        setResp(copyResp);
    }

    return (
    <AnswersContext.Provider value={{ resp, defineResp }}>
        {children}
    </AnswersContext.Provider>)
}
