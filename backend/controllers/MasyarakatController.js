import Masyarakat from "../models/MasyarakatModel.js";

export const getMasyarakat = async(req, res)=>{
    try {
        const response = await Masyarakat.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMasyarakatById = async(req, res)=>{
    try {
        const response = await Masyarakat.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const postMasyarakat = async (req, res) => {
    try {
        const { nik, nama, username, password, telp} = req.body; 
        const newMasyarakat = await Masyarakat.create({
            nik: nik,
            nama: nama,
            username: username,
            password: password,
            telp: telp
        });

        res.status(201).json({
            message: 'Success!',
            Masyarakat: newMasyarakat
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Failed!'
        });
    }
};


export const updateMasyarakat = async (req, res) => {
    try {
        const { nik, nama, username, password, telp} = req.body; 
        const MasyarakatId = req.params.id;
        const Masyarakat = await Masyarakat.findOne({
            where: {
                id: MasyarakatId
            }
        });

        if (!Masyarakat) {
            return res.status(404).json({
                message: 'Not found'
            });
        }
        Masyarakat.nik = nik;
        Masyarakat.nama = nama;
        Masyarakat.username = username;
        Masyarakat.password = password;
        Masyarakat.telp = telp;
        await Masyarakat.save();

        res.json({
            message: 'Succeded!',
            Masyarakat: Masyarakat
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Failed to edit!'
        });
    }
};

export const deleteMasyarakat = async (req, res) => {
    try {
        const MasyarakatId = req.params.id;

        const Masyarakat = await Masyarakat.findOne({
            where: {
                id: Masyarakat.Id
            }
        });

        if (!Masyarakat) {
            return res.status(404).json({
                message: 'Not found'
            });
        }

        await Masyarakat.destroy();

        res.json({
            message: 'Deleted successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Failed to delete'
        });
    }
};




