const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    role: {
      type: String,
      required: true,
      // Possible roles: Student, Educator, Therapist
    },
    age: {
      type: String,
      default: "*%$*&###",
    },
    gender: {
      type: String,
      default: "*%$*&###",
    },
    location: {
      type: String,
      default: "*%$*&###",
    },
    studentDetails: {
      class: {
        type: String,
        default: "*%$*&###",
      },
      school: {
        type: String,
        default: "*%$*&###",
      },
      educator: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: String,
      },
      therapist: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: String,
      },
    },
    educatorDetails: {
      students: [
        {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          name: String, 
        },
      ],
    },
    therapistDetails: {
      portfolio: {
        type: String,
        default: "*%$*&###",
      },
      work_desc: {
        type: String,
        default: "*%$*&###",
      },
      curr_company: {
        type: String,
        default: "*%$*&###",
      },
      experience_year: {
        type: String,
        default: "*%$*&###",
      },
      spec1: {
        type: String,
        default: "*%$*&###",
      },
      spec2: {
        type: String,
        default: "*%$*&###",
      },
      spec3: {
        type: String,
        default: "*%$*&###",
      },
      students: [
        {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          name: String, 
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);


UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified()) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
