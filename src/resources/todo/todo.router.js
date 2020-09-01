import { Router } from 'express'
const router = Router()
const controller = (req, res) => {
  console.log('Path => ', req.path)
  res.send({
    message: 'Hello'
  })
}

// api/todo/list
/*
    Note: All Routes will be relactive Routes this file should not 
    know the parent part of url and at the time of triggering the
    relative routes we will be on actual route that has been mounted
    at parent.
*/
router
  .route('/')
  .get(controller)
  .post(controller)

router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
