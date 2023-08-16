class MmotelServices {
  constructor() {}

  //   async addAppointment(req) {
  //     const appointment = new Appointments({
  //       doctorName: req.body.doctorName,
  //       doctorId: req.body.doctorId,
  //       patientName: req.body.patientName,
  //       patientEmail: req.body.patientEmail,
  //       hospital: req.body.hospital,
  //       appointmentDate: req.body.appointmentDate,
  //       appointmentTime: req.body.appointmentTime,
  //     });
  //     try {
  //       const appt = await appointment.save();
  //       return { success: true, appt };
  //     } catch (err) {
  //       throw err;
  //     }
  //   }
}

module.exports = new MmotelServices();
