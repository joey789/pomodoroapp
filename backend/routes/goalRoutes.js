const express = require('express')
const router = express.Router()
const {getGoals, 
        setGoals, 
        deleteGoal, 
        updateGoal
        } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoal).post(updateGoal)


router.get('/', getGoals)

router.post('/', setGoals)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router