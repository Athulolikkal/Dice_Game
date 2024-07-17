const getSessionData = (sessionStore, sessionId) => {
    return new Promise((resolve, reject) => {
        if (sessionId) {
            sessionStore.get(sessionId, (err, session) => {
                if (err) {
                    console.log(err, 'error is this');
                    return reject(err)
                }
                resolve(session)
            })
        } else {
            console.log(err, 'error is this');
            reject({ error: true })
        }
    })
}



const resultController = {
    checkReult: async (req, res) => {
        try {
            console.log(req.body);
            const totalPoint = req?.body?.totalPoint
            const betPoint = req?.body?.betPoint
            const betType = req?.body?.betType
            const selectedRandomNumbers = req?.body?.randomNumber
            if (selectedRandomNumbers !== undefined && selectedRandomNumbers.length === 2) {
                const sumOfDice = selectedRandomNumbers[0] + selectedRandomNumbers[1] + 2

                if (totalPoint > betPoint) {

                    if (betType === '7 DOWN' && sumOfDice < 7) {
                        res.json({ error: false, status: true, totalpoint: true, updatedTotal: totalPoint + betPoint, message: '7 down is success', bet: true, plusamount: betPoint, minAmount: 0 }).status(200)

                    } else if (betType === '7 UP' && sumOfDice > 7) {

                        res.json({ error: false, status: true, totalpoint: true, updatedTotal: totalPoint + betPoint, message: '7 up is success', bet: true, plusamount: betPoint, minAmount: 0 }).status(200)


                    } else if (betType === 'LUCKEY 7' && sumOfDice === 7) {

                        const addedPoint = betPoint * 5
                        res.json({ error: false, status: true, totalpoint: true, updatedTotal: totalPoint + addedPoint, message: 'luckey 7 is success', bet: true, plusamount: addedPoint, minAmount: 0 }).status(200)

                    } else {
                        res.json({ error: false, status: true, totalpoint: true, updatedTotal: totalPoint - betPoint, message: 'bet fale', bet: false, plusamount: 0, minAmount: betPoint }).status(200)
                    }

                } else {
                    res.json({ error: true, status: false, notEnoughtotalpoint: true, message: 'not enough total points', bet: false })
                }
            } else {
                res.json({ error: true, status: false, message: 'something went wrong', bet: false })
            }


        } catch (err) {
            console.log(err);
            res.json({ error: true, status: false }).status(400)
        }
    },

    getQuestion: async (req, res) => {
        try {
            const sessionId = req.params.id
            const sessionStore = req?.sessionStore
            console.log(sessionStore, 'new session store');

            const session = await getSessionData(sessionStore, sessionId)
            console.log(session, 'new session is this');
            const newSessionId = req.sessionID
            req.session.aiQuestions = req.params.userId
            console.log(newSessionId, 'newSession Id');
            return res.json({ newSession: newSessionId, newSessionStore: session })
        } catch (err) {
            console.log(err, 'error');
        }
    }
}

export default resultController;