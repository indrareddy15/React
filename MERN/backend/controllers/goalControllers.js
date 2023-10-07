// @desc Get goals
// @route GET /api/goals
// @access Prvate
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Method will Create goals' })
}

// @desc POST goals
// @route POST /api/goals
// @access Prvate
const postGoals = (req, res) => {
    console.log(req.body);
    if (!req.body.text) {
        res.status(404)
        throw new Error("Please add a text")
    }
    res.status(200).json({ message: 'Post Method will Updated goals' })
}

// @desc PUT goals
// @route PUT /api/goals/:id
// @access Prvate
const putGoals = (req, res) => {
    res.status(200).json({ message: `Put Method will Read the goals ${req.params.id}` })
}

// @desc DELETE goals
// @route DELETE /api/goals/:id
// @access Prvate
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delate Method will delete goals ${req.params.id}` })
}

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}