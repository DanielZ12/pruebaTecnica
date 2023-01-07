const db = require('../database/models')

module.exports = {
    all: async (req, res) => {

    },
    create: async (req, res) => {
        try {
            const {room, count_days, billing_id, status_id} = req.body

            const reservation = await db.Reservation.create({
                room: room?.trim(),
                count_days: +count_days,
                billing_id: +billing_id,
                status_id: 1
            })
            await reservation.reload({
                include: [
                    {
                        association: "billing"
                    },
                    {
                        association: "status"
                    }
                ]
            })
            return res.status(201).json({
                ok: true,
                status: 201,
                data: reservation, 
            });   
        } catch (error) {
            
        }
    },
    update: async (req, res) => {

    },
    remove: async (req, res) => {

    }
}