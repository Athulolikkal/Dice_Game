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
                    res.json({ error: true, status: false, totalpoint: false, message: 'not enough total points', bet: false })
                }
            } else {
                res.json({ error: true, status: false, message: 'something went wrong', bet: false })
            }


        } catch (err) {
            console.log(err);
            res.json({ error: true, status: false }).status(400)
        }
    }
}

export default resultController;