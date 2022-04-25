import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useAsyncForm } from "@lib/core/utils/useAsyncData";
import { useTasks } from "../data/hooks";
import { Task } from "../data/task";

type Props = {
  data: Task;
};
export const TaskForm = ({ data }: Props) => {
  const { refetch } = useTasks(data.challengeId);
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useAsyncForm<Task>(data || ({} as Task));

  return (
    <>
      <FormControl isInvalid={!!errors.title}>
        <FormLabel>Title</FormLabel>
        <Input type="text" {...register("title", { required: "Required!" })} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.content}>
        <FormLabel>Content</FormLabel>
        <Textarea
          {...register("content", { required: "Required!" })}
          noOfLines={3}
        />
        <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.startDate}>
        <FormLabel>Start date</FormLabel>
        <Input
          type="datetime-local"
          {...register("startDate", { required: "Required!" })}
        />
        <FormErrorMessage>{errors.startDate?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.endDate}>
        <FormLabel>End date</FormLabel>
        <Input
          type="datetime-local"
          {...register("endDate", { required: "Required!" })}
        />
        <FormErrorMessage>{errors.endDate?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};
