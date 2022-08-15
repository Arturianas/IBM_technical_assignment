


// // @desc CREATE Email
// //  @route POST /api/v2/email/newEmail
// // @access Public
// // export const createEmail = async (req, res, next) => {
// //     try {
// //       const newEmail = new Email({
// //         ...req.body,
// //       });
   
// //       await newEmail.save();
// //       res.status(200).send("Email has been created.");
// //     //   res.status(200).json({
// //     //     _id: newUser._id,
// //     //       username: newUser.username,
// //     //       email: newUser.email,
// //     //       isAdmin: newUser.isAdmin,
// //     //       isInstructor: newUser.isInstructor
// //     //   })
// //     } catch (err) {
// //       next(err);
// //     }
// //   };


// // @desc GET All Email
// //  @route GET /api/v2/email/
// // @access Public
//   export const getEmails = async (req,res,next)=>{
//     try {
//       const emails = await Email.find();
//       res.status(200).json(emails);
//     } catch (err) {
//       next(err);
//     }
//   }