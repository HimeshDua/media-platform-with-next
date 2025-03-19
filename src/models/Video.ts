import mongoose, { model, models, Schema } from "mongoose";

export const ViDEO_DIMENTIONS = {
  width: 1080,
  height: 1920,
} as const;

export interface InterfaceOfVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const videoSchema = new Schema<InterfaceOfVideo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
      required: true,
    },
    transformation: {
      height: { type: Number, default: ViDEO_DIMENTIONS.height },
      width: { type: Number, default: ViDEO_DIMENTIONS.width },
      quality: { type: Number, min: 1, max: 100 },
    },
  },
  { timestamps: true }
);

const User = models?.User || model<InterfaceOfVideo>("User", videoSchema);
